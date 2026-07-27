import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-wiki-france');
}

export default function HighExpWikiFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-wiki-france" />;
}
