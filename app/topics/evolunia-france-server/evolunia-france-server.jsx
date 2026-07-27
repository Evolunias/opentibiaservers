import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-france-server');
}

export default function EvoluniaFranceServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-france-server" />;
}
