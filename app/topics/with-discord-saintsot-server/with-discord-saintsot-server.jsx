import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-server');
}

export default function WithDiscordSaintsotServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-server" />;
}
