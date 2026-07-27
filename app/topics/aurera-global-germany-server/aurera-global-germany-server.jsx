import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-germany-server');
}

export default function AureraGlobalGermanyServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-germany-server" />;
}
