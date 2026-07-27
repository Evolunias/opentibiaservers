import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-ot-server');
}

export default function Tibia11OtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-ot-server" />;
}
