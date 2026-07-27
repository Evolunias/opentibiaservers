import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-fresh-start-server');
}

export default function Kasteria13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-fresh-start-server" />;
}
