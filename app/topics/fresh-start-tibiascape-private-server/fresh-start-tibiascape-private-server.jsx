import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-tibiascape-private-server');
}

export default function FreshStartTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-tibiascape-private-server" />;
}
