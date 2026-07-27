import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-argentina-server');
}

export default function AureraGlobalArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-argentina-server" />;
}
