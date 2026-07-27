import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-demolidores-create-account');
}

export default function NewSeasonDemolidoresCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-demolidores-create-account" />;
}
