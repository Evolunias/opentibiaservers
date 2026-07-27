import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-evolunia-create-account');
}

export default function NewEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-evolunia-create-account" />;
}
