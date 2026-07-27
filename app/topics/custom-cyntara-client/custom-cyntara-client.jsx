import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-client');
}

export default function CustomCyntaraClientKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-client" />;
}
