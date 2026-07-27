import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-private-server');
}

export default function FreshStartCyntaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-private-server" />;
}
