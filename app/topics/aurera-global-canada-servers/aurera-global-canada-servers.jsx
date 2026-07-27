import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-canada-servers');
}

export default function AureraGlobalCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-canada-servers" />;
}
