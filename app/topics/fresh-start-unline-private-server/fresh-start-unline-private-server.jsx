import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-unline-private-server');
}

export default function FreshStartUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-unline-private-server" />;
}
