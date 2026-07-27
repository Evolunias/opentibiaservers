import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-tibiame-create-account');
}

export default function CustomTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="custom-tibiame-create-account" />;
}
