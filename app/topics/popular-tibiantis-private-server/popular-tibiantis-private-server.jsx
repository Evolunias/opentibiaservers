import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-tibiantis-private-server');
}

export default function PopularTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="popular-tibiantis-private-server" />;
}
