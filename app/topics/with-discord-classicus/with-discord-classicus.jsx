import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus');
}

export default function WithDiscordClassicusKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus" />;
}
