import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiame-tibia');
}

export default function WithDiscordTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiame-tibia" />;
}
