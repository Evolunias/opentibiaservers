import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-fresh-start-server');
}

export default function Tibiantis13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-fresh-start-server" />;
}
