import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-client');
}

export default function WithDiscordSaintsotClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-client" />;
}
