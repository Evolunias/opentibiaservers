import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-canada-server');
}

export default function AureraGlobalCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-canada-server" />;
}
