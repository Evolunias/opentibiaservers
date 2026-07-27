import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-6-fresh-start-server');
}

export default function Kasteria86FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-6-fresh-start-server" />;
}
