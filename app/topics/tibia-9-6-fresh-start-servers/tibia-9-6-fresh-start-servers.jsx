import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-9-6-fresh-start-servers');
}

export default function Tibia96FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-9-6-fresh-start-servers" />;
}
