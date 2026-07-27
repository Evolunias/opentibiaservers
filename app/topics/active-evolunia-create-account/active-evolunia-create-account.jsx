import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-create-account');
}

export default function ActiveEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-create-account" />;
}
