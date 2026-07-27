import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiantis-private-server');
}

export default function CurrentTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="current-tibiantis-private-server" />;
}
