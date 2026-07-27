import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-nostalther-create-account');
}

export default function NewSeasonNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-nostalther-create-account" />;
}
