import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-chile-server');
}

export default function EvoluniaChileServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-chile-server" />;
}
