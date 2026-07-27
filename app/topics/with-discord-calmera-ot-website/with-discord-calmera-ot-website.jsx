import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-website');
}

export default function WithDiscordCalmeraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-website" />;
}
