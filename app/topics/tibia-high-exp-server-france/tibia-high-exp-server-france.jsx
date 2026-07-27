import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-high-exp-server-france');
}

export default function TibiaHighExpServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibia-high-exp-server-france" />;
}
