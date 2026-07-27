import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-72-fresh-start-ot-server');
}

export default function Tibia772FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-72-fresh-start-ot-server" />;
}
