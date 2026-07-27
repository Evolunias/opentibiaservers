import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-ot-server');
}

export default function Tibia76OtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-ot-server" />;
}
