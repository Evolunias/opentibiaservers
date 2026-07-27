import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiara-low-exp-server-france');
}

export default function TibiaraLowExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibiara-low-exp-server-france" />;
}
