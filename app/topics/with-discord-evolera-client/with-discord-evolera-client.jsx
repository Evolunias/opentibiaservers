import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-client');
}

export default function WithDiscordEvoleraClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-client" />;
}
