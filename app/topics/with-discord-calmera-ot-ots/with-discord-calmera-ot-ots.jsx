import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-calmera-ot-ots');
}

export default function WithDiscordCalmeraOtOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-calmera-ot-ots" />;
}
