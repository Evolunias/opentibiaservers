import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-fresh-start-server');
}

export default function Kasteria12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-fresh-start-server" />;
}
