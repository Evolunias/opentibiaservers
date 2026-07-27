import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-create-account');
}

export default function TibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="tibiame-create-account" />;
}
