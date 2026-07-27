import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-create-account');
}

export default function TopEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-create-account" />;
}
