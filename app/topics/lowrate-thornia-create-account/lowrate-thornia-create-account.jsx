import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-thornia-create-account');
}

export default function LowrateThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-thornia-create-account" />;
}
