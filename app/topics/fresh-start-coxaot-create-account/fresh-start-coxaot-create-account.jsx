import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-coxaot-create-account');
}

export default function FreshStartCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-coxaot-create-account" />;
}
