import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-archlight');
}

export default function WithDiscordArchlightKeywordPage() {
  return <StaticKeywordPage slug="with-discord-archlight" />;
}
