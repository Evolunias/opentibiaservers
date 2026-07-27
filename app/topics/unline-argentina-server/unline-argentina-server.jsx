import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-argentina-server');
}

export default function UnlineArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="unline-argentina-server" />;
}
