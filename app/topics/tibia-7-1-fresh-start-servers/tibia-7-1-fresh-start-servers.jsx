import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-1-fresh-start-servers');
}

export default function Tibia71FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-1-fresh-start-servers" />;
}
