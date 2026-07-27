import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-open-tibia');
}

export default function WithDiscordTibiantisOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-open-tibia" />;
}
