import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-official');
}

export default function WithDiscordUnlineOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-official" />;
}
