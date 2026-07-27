import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-open-tibia');
}

export default function WithDiscordMediviaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-open-tibia" />;
}
