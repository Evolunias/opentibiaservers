import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-rubinot-official');
}

export default function WithDiscordRubinotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-rubinot-official" />;
}
