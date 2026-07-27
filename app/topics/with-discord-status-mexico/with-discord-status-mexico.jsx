import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-status-mexico');
}

export default function WithDiscordStatusMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-discord-status-mexico" />;
}
