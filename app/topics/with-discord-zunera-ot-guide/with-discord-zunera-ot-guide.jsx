import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zunera-ot-guide');
}

export default function WithDiscordZuneraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zunera-ot-guide" />;
}
