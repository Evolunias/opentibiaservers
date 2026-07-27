import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server');
}

export default function TibiaOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server" />;
}
