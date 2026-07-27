import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-yurots-official');
}

export default function WithDiscordYurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-yurots-official" />;
}
