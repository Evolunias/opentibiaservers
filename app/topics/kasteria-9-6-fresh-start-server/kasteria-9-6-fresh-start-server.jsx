import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-9-6-fresh-start-server');
}

export default function Kasteria96FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-9-6-fresh-start-server" />;
}
