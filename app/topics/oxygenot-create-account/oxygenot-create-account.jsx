import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('oxygenot-create-account');
}

export default function OxygenotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="oxygenot-create-account" />;
}
