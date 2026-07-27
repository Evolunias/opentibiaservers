import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-nostalther-create-account');
}

export default function ActiveNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-nostalther-create-account" />;
}
