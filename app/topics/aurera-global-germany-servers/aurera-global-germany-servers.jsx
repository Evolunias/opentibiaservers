import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-germany-servers');
}

export default function AureraGlobalGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-germany-servers" />;
}
