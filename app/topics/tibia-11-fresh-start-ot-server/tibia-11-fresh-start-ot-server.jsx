import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-ot-server');
}

export default function Tibia11FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-ot-server" />;
}
