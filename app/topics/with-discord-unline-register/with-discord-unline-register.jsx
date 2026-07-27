import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-register');
}

export default function WithDiscordUnlineRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-register" />;
}
