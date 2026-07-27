import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-client');
}

export default function Tibia14FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-client" />;
}
