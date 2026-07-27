import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-latin-america-server');
}

export default function EvoleraLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="evolera-latin-america-server" />;
}
