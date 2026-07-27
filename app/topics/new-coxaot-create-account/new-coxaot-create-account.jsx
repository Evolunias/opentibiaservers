import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-coxaot-create-account');
}

export default function NewCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-coxaot-create-account" />;
}
