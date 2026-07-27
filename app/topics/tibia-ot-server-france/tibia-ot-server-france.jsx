import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-france');
}

export default function TibiaOtServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-france" />;
}
