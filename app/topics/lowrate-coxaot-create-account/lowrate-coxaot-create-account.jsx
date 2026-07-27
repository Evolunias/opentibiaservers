import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-coxaot-create-account');
}

export default function LowrateCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-coxaot-create-account" />;
}
