import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-ot-server');
}

export default function Tibia84OtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-ot-server" />;
}
