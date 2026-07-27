import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-6-fresh-start-client');
}

export default function Tibia76FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-6-fresh-start-client" />;
}
