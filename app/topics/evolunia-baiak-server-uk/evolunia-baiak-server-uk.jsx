import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-uk');
}

export default function EvoluniaBaiakServerUkKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-uk" />;
}
