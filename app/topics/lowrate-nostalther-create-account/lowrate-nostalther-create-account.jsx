import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-nostalther-create-account');
}

export default function LowrateNostaltherCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-nostalther-create-account" />;
}
