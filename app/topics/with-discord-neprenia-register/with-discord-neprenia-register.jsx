import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-register');
}

export default function WithDiscordNepreniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-register" />;
}
