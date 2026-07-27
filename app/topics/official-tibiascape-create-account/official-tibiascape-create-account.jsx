import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibiascape-create-account');
}

export default function OfficialTibiascapeCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-tibiascape-create-account" />;
}
