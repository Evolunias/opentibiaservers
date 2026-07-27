import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibiantis-server');
}

export default function BestTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="best-tibiantis-server" />;
}
