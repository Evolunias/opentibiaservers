import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-create-account');
}

export default function BestEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-create-account" />;
}
