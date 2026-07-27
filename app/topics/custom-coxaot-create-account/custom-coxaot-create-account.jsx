import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-coxaot-create-account');
}

export default function CustomCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-coxaot-create-account" />;
}
