import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-server');
}

export default function WithDiscordUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-server" />;
}
