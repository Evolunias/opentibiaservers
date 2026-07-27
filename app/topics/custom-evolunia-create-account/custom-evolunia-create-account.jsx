import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-evolunia-create-account');
}

export default function CustomEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-evolunia-create-account" />;
}
