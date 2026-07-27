import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-create-account');
}

export default function OfficialCanobCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-canob-create-account" />;
}
