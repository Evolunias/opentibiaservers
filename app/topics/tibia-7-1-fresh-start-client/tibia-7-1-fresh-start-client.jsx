import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-fresh-start-client');
}

export default function Tibia71FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-fresh-start-client" />;
}
