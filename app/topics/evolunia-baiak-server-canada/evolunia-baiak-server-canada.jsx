import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-canada');
}

export default function EvoluniaBaiakServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-canada" />;
}
