import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-fresh-start-ot-server');
}

export default function Tibia96FreshStartOtServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-fresh-start-ot-server" />;
}
