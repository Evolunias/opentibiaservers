import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiascape-register');
}

export default function WithDiscordTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiascape-register" />;
}
