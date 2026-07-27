import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiantis-private-server');
}

export default function FreshStartTibiantisPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiantis-private-server" />;
}
