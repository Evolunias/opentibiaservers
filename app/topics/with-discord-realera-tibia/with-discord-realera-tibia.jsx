import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-tibia');
}

export default function WithDiscordRealeraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-tibia" />;
}
