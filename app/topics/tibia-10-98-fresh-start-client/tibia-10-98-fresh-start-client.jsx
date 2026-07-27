import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-98-fresh-start-client');
}

export default function Tibia1098FreshStartClientKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-98-fresh-start-client" />;
}
