import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oxygenot-official');
}

export default function WithDiscordOxygenotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oxygenot-official" />;
}
