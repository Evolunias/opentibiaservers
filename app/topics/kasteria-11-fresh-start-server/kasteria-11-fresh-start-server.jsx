import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-fresh-start-server');
}

export default function Kasteria11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-fresh-start-server" />;
}
