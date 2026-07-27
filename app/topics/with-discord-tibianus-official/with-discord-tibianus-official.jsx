import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-official');
}

export default function WithDiscordTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-official" />;
}
