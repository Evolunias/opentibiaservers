import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-ot-server');
}

export default function Tibia100FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-ot-server" />;
}
