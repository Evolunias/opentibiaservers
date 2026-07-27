import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-luminera-create-account');
}

export default function OfficialLumineraCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-luminera-create-account" />;
}
