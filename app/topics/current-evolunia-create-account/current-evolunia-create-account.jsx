import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-create-account');
}

export default function CurrentEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-create-account" />;
}
