import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-nostalther-create-account');
}

export default function OfficialNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-nostalther-create-account" />;
}
