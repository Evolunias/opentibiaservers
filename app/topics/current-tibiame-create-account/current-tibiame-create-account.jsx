import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibiame-create-account');
}

export default function CurrentTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="current-tibiame-create-account" />;
}
