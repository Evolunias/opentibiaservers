import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-eldera-create-account');
}

export default function OfficialElderaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-eldera-create-account" />;
}
