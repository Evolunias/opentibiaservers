import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-fresh-start-ot-server');
}

export default function Tibia71FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-fresh-start-ot-server" />;
}
