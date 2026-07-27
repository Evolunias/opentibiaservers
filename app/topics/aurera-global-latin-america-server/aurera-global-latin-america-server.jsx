import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-latin-america-server');
}

export default function AureraGlobalLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-latin-america-server" />;
}
