import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-cyntara-official');
}

export default function WithDiscordCyntaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-cyntara-official" />;
}
