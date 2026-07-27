import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-8-6-fresh-start-servers');
}

export default function Tibia86FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-8-6-fresh-start-servers" />;
}
