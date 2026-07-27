import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-guide');
}

export default function WithDiscordSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-guide" />;
}
