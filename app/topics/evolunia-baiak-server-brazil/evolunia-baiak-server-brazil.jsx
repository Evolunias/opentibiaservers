import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-brazil');
}

export default function EvoluniaBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-brazil" />;
}
