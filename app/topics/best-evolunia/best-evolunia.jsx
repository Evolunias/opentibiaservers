import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia');
}

export default function BestEvoluniaKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia" />;
}
