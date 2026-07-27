import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-server');
}

export default function CustomCyntaraServerKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-server" />;
}
