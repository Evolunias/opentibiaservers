import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-client');
}

export default function Tibia84FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-client" />;
}
