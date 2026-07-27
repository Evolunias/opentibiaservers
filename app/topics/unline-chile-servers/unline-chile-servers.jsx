import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-chile-servers');
}

export default function UnlineChileServersKeywordPage() {
  return <StaticKeywordPage slug="unline-chile-servers" />;
}
