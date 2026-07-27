import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-12-fresh-start-servers');
}

export default function Tibia12FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-12-fresh-start-servers" />;
}
