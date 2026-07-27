import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-chile-servers');
}

export default function AureraGlobalChileServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-chile-servers" />;
}
