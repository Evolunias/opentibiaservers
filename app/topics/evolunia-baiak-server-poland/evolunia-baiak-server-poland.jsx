import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-poland');
}

export default function EvoluniaBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-poland" />;
}
