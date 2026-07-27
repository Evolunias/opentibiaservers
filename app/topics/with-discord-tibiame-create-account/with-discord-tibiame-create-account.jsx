import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-create-account');
}

export default function WithDiscordTibiameCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-create-account" />;
}
