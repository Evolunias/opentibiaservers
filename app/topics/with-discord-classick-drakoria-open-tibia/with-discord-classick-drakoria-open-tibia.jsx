import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classick-drakoria-open-tibia');
}

export default function WithDiscordClassickDrakoriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classick-drakoria-open-tibia" />;
}
