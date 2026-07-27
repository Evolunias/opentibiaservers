import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-client');
}

export default function Tibia100FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-client" />;
}
