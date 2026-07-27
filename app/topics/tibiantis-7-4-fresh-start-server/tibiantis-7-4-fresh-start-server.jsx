import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-fresh-start-server');
}

export default function Tibiantis74FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-fresh-start-server" />;
}
