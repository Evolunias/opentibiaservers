import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-ot-server');
}

export default function EvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="evolunia-ot-server" />;
}
