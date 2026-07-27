import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-argentina');
}

export default function EvoluniaBaiakServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-argentina" />;
}
