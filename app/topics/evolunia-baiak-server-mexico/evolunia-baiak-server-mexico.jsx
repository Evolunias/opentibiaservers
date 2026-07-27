import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-mexico');
}

export default function EvoluniaBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-mexico" />;
}
