import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-ots');
}

export default function CustomCyntaraOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-ots" />;
}
