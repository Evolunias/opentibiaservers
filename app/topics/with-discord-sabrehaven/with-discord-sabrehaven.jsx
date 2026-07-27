import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven');
}

export default function WithDiscordSabrehavenKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven" />;
}
