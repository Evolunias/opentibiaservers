import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-chile-servers');
}

export default function EvoluniaChileServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-chile-servers" />;
}
