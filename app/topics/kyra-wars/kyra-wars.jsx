import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-wars');
}

export default function KyraWarsKeywordPage() {
  return <StaticKeywordPage slug="kyra-wars" />;
}
