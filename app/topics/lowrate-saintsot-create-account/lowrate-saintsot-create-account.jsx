import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-saintsot-create-account');
}

export default function LowrateSaintsotCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-saintsot-create-account" />;
}
