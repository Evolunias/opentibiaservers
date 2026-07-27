import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibia-7-4-fresh-start-servers');
}

export default function Tibia74FreshStartServersKeywordPage() {
  return <StaticKeywordPage slug="tibia-7-4-fresh-start-servers" />;
}
