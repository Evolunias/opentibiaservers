import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-ot-server');
}

export default function Tibia14OtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-ot-server" />;
}
