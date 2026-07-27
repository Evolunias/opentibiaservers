import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-register');
}

export default function WithDiscordEvoluniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-register" />;
}
