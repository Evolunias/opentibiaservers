import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-venoreot-open-tibia');
}

export default function WithDiscordVenoreotOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-venoreot-open-tibia" />;
}
