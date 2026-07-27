import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-ots');
}

export default function BestEvoluniaOtsKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-ots" />;
}
