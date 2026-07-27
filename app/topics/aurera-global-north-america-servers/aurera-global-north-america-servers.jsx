import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-north-america-servers');
}

export default function AureraGlobalNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-north-america-servers" />;
}
