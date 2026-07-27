import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-official');
}

export default function WithDiscordTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-official" />;
}
