import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-fresh-start-server-france');
}

export default function TibianusFreshStartServerFranceKeywordPage() {
  return <StaticKeywordPage slug="tibianus-fresh-start-server-france" />;
}
