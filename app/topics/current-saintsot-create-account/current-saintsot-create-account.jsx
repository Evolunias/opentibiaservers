import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-saintsot-create-account');
}

export default function CurrentSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-saintsot-create-account" />;
}
