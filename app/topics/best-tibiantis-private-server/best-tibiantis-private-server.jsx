import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-private-server');
}

export default function BestTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-private-server" />;
}
