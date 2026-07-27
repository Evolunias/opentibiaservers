import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-server');
}

export default function NewCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-server" />;
}
