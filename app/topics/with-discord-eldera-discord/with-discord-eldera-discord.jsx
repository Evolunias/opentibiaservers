import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-discord');
}

export default function WithDiscordElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-discord" />;
}
