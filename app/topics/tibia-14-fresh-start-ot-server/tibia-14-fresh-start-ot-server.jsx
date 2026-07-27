import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-ot-server');
}

export default function Tibia14FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-ot-server" />;
}
