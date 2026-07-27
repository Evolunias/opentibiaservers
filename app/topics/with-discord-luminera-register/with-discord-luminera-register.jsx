import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-luminera-register');
}

export default function WithDiscordLumineraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-luminera-register" />;
}
