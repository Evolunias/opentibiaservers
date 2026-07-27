import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kyra-server');
}

export default function KyraServerKeywordPage() {
  return <StaticKeywordPage slug="kyra-server" />;
}
