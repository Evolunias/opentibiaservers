import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-client');
}

export default function Tibia11FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-client" />;
}
