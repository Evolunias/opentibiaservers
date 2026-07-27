import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-fresh-start-ot-server');
}

export default function Tibia76FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-fresh-start-ot-server" />;
}
