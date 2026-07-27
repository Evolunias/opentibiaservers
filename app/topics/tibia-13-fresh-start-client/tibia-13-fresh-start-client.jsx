import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-13-fresh-start-client');
}

export default function Tibia13FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-13-fresh-start-client" />;
}
