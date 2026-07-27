import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-private-server');
}

export default function FreshStartNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-private-server" />;
}
