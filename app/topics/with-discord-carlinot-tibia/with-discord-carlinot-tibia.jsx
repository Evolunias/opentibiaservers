import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-tibia');
}

export default function WithDiscordCarlinotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-tibia" />;
}
