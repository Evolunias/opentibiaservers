import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-tibiame-create-account');
}

export default function NewTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="new-tibiame-create-account" />;
}
