import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-54-fresh-start-client');
}

export default function Tibia854FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-54-fresh-start-client" />;
}
