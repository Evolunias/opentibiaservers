import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-official');
}

export default function WithDiscordSaintsotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-official" />;
}
