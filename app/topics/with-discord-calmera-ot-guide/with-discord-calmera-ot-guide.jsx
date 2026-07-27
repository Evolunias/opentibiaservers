import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-guide');
}

export default function WithDiscordCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-guide" />;
}
