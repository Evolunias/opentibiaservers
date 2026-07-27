import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-open-tibia');
}

export default function WithDiscordBlazeraOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-open-tibia" />;
}
