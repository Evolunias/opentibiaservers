import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-coxaot-create-account');
}

export default function OfficialCoxaotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-coxaot-create-account" />;
}
