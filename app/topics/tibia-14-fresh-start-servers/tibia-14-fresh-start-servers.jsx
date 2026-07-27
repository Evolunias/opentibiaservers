import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-14-fresh-start-servers');
}

export default function Tibia14FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-14-fresh-start-servers" />;
}
