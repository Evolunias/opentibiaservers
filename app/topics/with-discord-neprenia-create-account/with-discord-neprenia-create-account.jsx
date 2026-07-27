import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-create-account');
}

export default function WithDiscordNepreniaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-create-account" />;
}
