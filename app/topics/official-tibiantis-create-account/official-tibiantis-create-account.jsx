import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiantis-create-account');
}

export default function OfficialTibiantisCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-tibiantis-create-account" />;
}
