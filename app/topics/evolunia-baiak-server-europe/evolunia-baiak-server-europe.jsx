import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-europe');
}

export default function EvoluniaBaiakServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-europe" />;
}
