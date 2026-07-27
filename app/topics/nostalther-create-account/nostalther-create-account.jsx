import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('nostalther-create-account');
}

export default function NostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="nostalther-create-account" />;
}
