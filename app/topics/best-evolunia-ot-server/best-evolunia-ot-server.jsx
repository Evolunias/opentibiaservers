import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-ot-server');
}

export default function BestEvoluniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-ot-server" />;
}
