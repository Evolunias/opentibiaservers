import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-fresh-start-server-usa');
}

export default function TibiantisFreshStartServerUsaKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-fresh-start-server-usa" />;
}
