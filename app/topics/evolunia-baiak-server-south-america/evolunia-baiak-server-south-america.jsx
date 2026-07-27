import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-south-america');
}

export default function EvoluniaBaiakServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-south-america" />;
}
