import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-thornia-create-account');
}

export default function OfficialThorniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-thornia-create-account" />;
}
