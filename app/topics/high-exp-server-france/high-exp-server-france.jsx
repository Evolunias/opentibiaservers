import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('high-exp-server-france');
}

export default function HighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="high-exp-server-france" />;
}
