import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibiantis-private-server');
}

export default function TopTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="top-tibiantis-private-server" />;
}
