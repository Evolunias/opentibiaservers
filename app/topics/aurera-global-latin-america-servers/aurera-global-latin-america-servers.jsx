import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-latin-america-servers');
}

export default function AureraGlobalLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-latin-america-servers" />;
}
