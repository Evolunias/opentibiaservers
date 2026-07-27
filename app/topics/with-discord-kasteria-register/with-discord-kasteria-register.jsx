import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-register');
}

export default function WithDiscordKasteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-register" />;
}
