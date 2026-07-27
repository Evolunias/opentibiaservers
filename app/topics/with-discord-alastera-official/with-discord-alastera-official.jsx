import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-official');
}

export default function WithDiscordAlasteraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-official" />;
}
