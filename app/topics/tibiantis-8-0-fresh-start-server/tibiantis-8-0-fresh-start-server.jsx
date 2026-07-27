import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-8-0-fresh-start-server');
}

export default function Tibiantis80FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-8-0-fresh-start-server" />;
}
