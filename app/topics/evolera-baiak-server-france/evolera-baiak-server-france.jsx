import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-baiak-server-france');
}

export default function EvoleraBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolera-baiak-server-france" />;
}
