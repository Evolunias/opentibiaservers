import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-midhem-create-account');
}

export default function WithDiscordMidhemCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-midhem-create-account" />;
}
