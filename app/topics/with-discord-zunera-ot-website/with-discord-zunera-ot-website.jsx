import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-zunera-ot-website');
}

export default function WithDiscordZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-zunera-ot-website" />;
}
