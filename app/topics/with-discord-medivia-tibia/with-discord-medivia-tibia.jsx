import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-tibia');
}

export default function WithDiscordMediviaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-tibia" />;
}
