import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-discord');
}

export default function WithDiscordSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-discord" />;
}
