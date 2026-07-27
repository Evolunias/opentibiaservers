import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-tibia');
}

export default function WithDiscordVenoreotTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-tibia" />;
}
