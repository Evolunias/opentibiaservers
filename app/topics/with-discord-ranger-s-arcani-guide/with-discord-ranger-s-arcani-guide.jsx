import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-ranger-s-arcani-guide');
}

export default function WithDiscordRangerSArcaniGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-ranger-s-arcani-guide" />;
}
