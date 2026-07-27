import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-latin-america');
}

export default function EvoluniaBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-latin-america" />;
}
