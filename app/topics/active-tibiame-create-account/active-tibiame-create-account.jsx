import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-tibiame-create-account');
}

export default function ActiveTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="active-tibiame-create-account" />;
}
