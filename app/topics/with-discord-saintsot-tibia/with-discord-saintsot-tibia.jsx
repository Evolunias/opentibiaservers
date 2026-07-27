import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-tibia');
}

export default function WithDiscordSaintsotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-tibia" />;
}
