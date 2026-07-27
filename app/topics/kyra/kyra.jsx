import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra');
}

export default function KyraKeywordPage() {
  return <StaticKeywordPage slug="kyra" />;
}
