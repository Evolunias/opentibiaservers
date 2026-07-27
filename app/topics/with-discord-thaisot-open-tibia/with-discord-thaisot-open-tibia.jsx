import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-open-tibia');
}

export default function WithDiscordThaisotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-open-tibia" />;
}
