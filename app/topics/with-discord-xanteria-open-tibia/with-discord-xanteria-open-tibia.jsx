import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-open-tibia');
}

export default function WithDiscordXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-open-tibia" />;
}
