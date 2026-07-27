import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-create-account');
}

export default function OfficialEvoluniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-create-account" />;
}
