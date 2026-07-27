import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-1-fresh-start-ot-server');
}

export default function Tibia81FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-1-fresh-start-ot-server" />;
}
