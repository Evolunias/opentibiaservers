import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera');
}

export default function WithDiscordEvoleraKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera" />;
}
