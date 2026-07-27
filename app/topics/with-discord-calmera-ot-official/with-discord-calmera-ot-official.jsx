import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-official');
}

export default function WithDiscordCalmeraOtOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-official" />;
}
