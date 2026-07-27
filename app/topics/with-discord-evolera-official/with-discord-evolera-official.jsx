import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-official');
}

export default function WithDiscordEvoleraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-official" />;
}
