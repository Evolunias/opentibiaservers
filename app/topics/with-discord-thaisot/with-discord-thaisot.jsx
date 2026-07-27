import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot');
}

export default function WithDiscordThaisotKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot" />;
}
