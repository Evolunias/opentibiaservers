import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob');
}

export default function WithDiscordCanobKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob" />;
}
