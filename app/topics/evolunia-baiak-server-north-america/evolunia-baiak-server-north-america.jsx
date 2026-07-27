import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-north-america');
}

export default function EvoluniaBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-north-america" />;
}
