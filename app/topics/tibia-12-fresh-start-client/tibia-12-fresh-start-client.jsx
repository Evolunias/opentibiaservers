import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-client');
}

export default function Tibia12FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-client" />;
}
