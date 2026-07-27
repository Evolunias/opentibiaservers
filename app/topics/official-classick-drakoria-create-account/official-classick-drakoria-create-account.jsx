import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-classick-drakoria-create-account');
}

export default function OfficialClassickDrakoriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-classick-drakoria-create-account" />;
}
