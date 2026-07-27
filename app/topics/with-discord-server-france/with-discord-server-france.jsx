import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-france');
}

export default function WithDiscordServerFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-france" />;
}
