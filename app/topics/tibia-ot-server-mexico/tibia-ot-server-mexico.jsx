import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-mexico');
}

export default function TibiaOtServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-mexico" />;
}
