import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-server');
}

export default function Tibia12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-server" />;
}
