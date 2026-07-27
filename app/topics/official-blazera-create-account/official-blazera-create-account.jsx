import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-blazera-create-account');
}

export default function OfficialBlazeraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-blazera-create-account" />;
}
