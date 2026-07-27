import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-germany-servers');
}

export default function EvoluniaGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-germany-servers" />;
}
