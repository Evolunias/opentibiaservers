import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-xanteria-create-account');
}

export default function OfficialXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-xanteria-create-account" />;
}
