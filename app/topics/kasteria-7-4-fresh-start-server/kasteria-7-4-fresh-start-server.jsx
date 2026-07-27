import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-7-4-fresh-start-server');
}

export default function Kasteria74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-7-4-fresh-start-server" />;
}
