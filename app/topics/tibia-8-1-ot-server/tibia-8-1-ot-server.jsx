import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-ot-server');
}

export default function Tibia81OtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-ot-server" />;
}
