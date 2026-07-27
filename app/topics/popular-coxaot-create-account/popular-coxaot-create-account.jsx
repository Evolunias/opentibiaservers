import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-coxaot-create-account');
}

export default function PopularCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="popular-coxaot-create-account" />;
}
