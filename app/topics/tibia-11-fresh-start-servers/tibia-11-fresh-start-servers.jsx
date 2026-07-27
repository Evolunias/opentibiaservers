import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-11-fresh-start-servers');
}

export default function Tibia11FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-11-fresh-start-servers" />;
}
