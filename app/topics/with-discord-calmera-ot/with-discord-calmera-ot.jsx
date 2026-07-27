import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot');
}

export default function WithDiscordCalmeraOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot" />;
}
