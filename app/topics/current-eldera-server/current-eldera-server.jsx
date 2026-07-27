import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-server');
}

export default function CurrentElderaServerKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-server" />;
}
