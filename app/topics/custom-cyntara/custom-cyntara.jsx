import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara');
}

export default function CustomCyntaraKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara" />;
}
