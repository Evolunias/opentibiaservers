import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibiame-create-account');
}

export default function LowrateTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibiame-create-account" />;
}
