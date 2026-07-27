import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-fun-server');
}

export default function EvoluniaFunServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-fun-server" />;
}
