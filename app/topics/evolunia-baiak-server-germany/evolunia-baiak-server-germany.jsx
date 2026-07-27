import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-germany');
}

export default function EvoluniaBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-germany" />;
}
