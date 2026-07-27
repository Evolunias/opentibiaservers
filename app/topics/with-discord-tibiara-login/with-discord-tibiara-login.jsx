import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiara-login');
}

export default function WithDiscordTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiara-login" />;
}
