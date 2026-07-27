import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-tibia');
}

export default function WithDiscordXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-tibia" />;
}
