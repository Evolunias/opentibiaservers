import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-argentina-servers');
}

export default function AureraGlobalArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-argentina-servers" />;
}
