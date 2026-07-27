import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-xanteria-login');
}

export default function WithDiscordXanteriaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-discord-xanteria-login" />;
}
