import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-baiak-server-france');
}

export default function EvoluniaBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="evolunia-baiak-server-france" />;
}
