import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-official');
}

export default function WithDiscordImperianicOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-official" />;
}
