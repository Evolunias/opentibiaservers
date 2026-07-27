import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-realera-login');
}

export default function WithDiscordRealeraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-realera-login" />;
}
