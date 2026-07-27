import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-france-servers');
}

export default function EvoluniaFranceServersKeywordPage() {
  return <StaticKeywordPage slug="evolunia-france-servers" />;
}
