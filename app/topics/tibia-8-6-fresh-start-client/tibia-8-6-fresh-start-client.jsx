import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-client');
}

export default function Tibia86FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-client" />;
}
