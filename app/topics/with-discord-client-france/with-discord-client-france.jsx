import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-client-france');
}

export default function WithDiscordClientFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-client-france" />;
}
