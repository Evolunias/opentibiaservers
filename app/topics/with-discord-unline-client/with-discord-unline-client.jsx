import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-client');
}

export default function WithDiscordUnlineClientKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-client" />;
}
