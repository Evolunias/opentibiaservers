import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-ot-server-argentina');
}

export default function TibiaOtServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="tibia-ot-server-argentina" />;
}
