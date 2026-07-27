import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-nostalther-create-account');
}

export default function CustomNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-nostalther-create-account" />;
}
