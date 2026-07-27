import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiame-create-account');
}

export default function OfficialTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-tibiame-create-account" />;
}
