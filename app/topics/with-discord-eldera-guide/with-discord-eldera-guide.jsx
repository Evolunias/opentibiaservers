import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-eldera-guide');
}

export default function WithDiscordElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-eldera-guide" />;
}
