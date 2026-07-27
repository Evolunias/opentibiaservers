import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-client');
}

export default function Tibia15FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-client" />;
}
