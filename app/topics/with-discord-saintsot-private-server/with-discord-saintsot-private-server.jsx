import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-private-server');
}

export default function WithDiscordSaintsotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-private-server" />;
}
