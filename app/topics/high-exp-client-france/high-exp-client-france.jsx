import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-client-france');
}

export default function HighExpClientFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-client-france" />;
}
