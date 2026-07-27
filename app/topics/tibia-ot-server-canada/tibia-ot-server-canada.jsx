import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-canada');
}

export default function TibiaOtServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-canada" />;
}
