import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-register');
}

export default function WithDiscordXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-register" />;
}
