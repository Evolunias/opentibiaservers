import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-official');
}

export default function WithDiscordThaisotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-official" />;
}
