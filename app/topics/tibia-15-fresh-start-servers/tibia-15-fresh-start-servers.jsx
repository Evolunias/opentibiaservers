import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-15-fresh-start-servers');
}

export default function Tibia15FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-15-fresh-start-servers" />;
}
