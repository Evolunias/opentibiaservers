import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-server-list-france');
}

export default function WithDiscordServerListFranceKeywordPage() {
  return <StaticKeywordPage slug="with-discord-server-list-france" />;
}
