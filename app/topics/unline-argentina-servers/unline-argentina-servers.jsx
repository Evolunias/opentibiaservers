import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-argentina-servers');
}

export default function UnlineArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="unline-argentina-servers" />;
}
