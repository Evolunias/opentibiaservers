import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-open-tibia');
}

export default function WithDiscordSaintsotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-open-tibia" />;
}
