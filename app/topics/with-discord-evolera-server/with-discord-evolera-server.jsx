import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-server');
}

export default function WithDiscordEvoleraServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-server" />;
}
