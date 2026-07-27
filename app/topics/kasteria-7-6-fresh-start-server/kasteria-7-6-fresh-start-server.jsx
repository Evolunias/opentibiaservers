import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-6-fresh-start-server');
}

export default function Kasteria76FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-6-fresh-start-server" />;
}
