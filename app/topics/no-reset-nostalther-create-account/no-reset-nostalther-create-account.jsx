import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nostalther-create-account');
}

export default function NoResetNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nostalther-create-account" />;
}
