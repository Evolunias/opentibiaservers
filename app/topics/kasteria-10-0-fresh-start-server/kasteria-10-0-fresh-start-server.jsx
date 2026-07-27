import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-10-0-fresh-start-server');
}

export default function Kasteria100FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-10-0-fresh-start-server" />;
}
