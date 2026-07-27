import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-4-fresh-start-servers');
}

export default function Tibia84FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-4-fresh-start-servers" />;
}
