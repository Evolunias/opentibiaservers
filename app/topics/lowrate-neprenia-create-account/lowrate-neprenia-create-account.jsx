import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-neprenia-create-account');
}

export default function LowrateNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-neprenia-create-account" />;
}
