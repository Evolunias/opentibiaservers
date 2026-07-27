import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-thornia-create-account');
}

export default function CurrentThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-thornia-create-account" />;
}
