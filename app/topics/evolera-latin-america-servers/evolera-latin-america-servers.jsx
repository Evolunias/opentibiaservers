import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-latin-america-servers');
}

export default function EvoleraLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="evolera-latin-america-servers" />;
}
