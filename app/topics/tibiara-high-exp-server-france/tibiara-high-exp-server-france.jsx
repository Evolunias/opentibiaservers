import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-high-exp-server-france');
}

export default function TibiaraHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-high-exp-server-france" />;
}
