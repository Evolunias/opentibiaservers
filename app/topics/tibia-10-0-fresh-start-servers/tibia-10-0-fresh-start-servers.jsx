import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-10-0-fresh-start-servers');
}

export default function Tibia100FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-10-0-fresh-start-servers" />;
}
