import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-ot');
}

export default function BestEvoluniaOtKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-ot" />;
}
