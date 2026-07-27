import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-serenity-create-account');
}

export default function OfficialSerenityCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="official-serenity-create-account" />;
}
