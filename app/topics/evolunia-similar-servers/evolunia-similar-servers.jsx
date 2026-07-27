import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-similar-servers');
}

export default function EvoluniaSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-similar-servers" />;
}
