import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-tibia');
}

export default function WithDiscordThaisotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-tibia" />;
}
