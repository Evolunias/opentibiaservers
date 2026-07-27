import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-world');
}

export default function KyraWorldKeywordPage() {
  return <StaticKeywordPage slug="kyra-world" />;
}
