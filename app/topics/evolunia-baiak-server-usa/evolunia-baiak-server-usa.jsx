import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-usa');
}

export default function EvoluniaBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-usa" />;
}
