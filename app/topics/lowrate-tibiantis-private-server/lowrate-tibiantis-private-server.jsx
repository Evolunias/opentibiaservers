import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiantis-private-server');
}

export default function LowrateTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiantis-private-server" />;
}
