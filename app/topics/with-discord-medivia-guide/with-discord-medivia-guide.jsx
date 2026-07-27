import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-guide');
}

export default function WithDiscordMediviaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-guide" />;
}
