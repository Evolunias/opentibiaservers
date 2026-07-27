import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-login');
}

export default function WithDiscordEvoluniaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-login" />;
}
