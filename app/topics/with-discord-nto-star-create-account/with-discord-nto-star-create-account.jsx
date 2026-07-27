import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-nto-star-create-account');
}

export default function WithDiscordNtoStarCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-nto-star-create-account" />;
}
