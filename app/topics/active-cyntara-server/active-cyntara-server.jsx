import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-cyntara-server');
}

export default function ActiveCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="active-cyntara-server" />;
}
