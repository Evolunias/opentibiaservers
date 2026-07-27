import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-fresh-start-client');
}

export default function Tibia96FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-fresh-start-client" />;
}
