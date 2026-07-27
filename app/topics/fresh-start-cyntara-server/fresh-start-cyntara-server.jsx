import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-server');
}

export default function FreshStartCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-server" />;
}
