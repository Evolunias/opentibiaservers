import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-kasteria-private-server');
}

export default function FreshStartKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-kasteria-private-server" />;
}
