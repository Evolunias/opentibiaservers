import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-tibia');
}

export default function WithDiscordTibiantisTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-tibia" />;
}
