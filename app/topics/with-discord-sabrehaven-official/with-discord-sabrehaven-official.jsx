import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-sabrehaven-official');
}

export default function WithDiscordSabrehavenOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-sabrehaven-official" />;
}
