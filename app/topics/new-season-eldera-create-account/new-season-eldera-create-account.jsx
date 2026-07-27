import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-season-eldera-create-account');
}

export default function NewSeasonElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-season-eldera-create-account" />;
}
