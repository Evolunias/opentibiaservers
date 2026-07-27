import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-official');
}

export default function WithDiscordDemolidoresOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-official" />;
}
