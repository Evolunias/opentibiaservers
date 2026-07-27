import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-tibia');
}

export default function WithDiscordTibianusTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-tibia" />;
}
