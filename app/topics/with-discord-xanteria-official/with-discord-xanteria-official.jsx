import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-official');
}

export default function WithDiscordXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-official" />;
}
