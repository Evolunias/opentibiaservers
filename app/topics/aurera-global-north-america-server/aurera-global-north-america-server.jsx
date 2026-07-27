import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-north-america-server');
}

export default function AureraGlobalNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-north-america-server" />;
}
