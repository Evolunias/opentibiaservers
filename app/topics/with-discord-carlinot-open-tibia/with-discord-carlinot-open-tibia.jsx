import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-open-tibia');
}

export default function WithDiscordCarlinotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-open-tibia" />;
}
