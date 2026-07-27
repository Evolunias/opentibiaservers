import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-fresh-start-server');
}

export default function Kasteria15FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-fresh-start-server" />;
}
