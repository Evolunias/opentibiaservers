import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-tibia');
}

export default function WithDiscordCalmeraOtTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-tibia" />;
}
