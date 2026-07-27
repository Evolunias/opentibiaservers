import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-ot');
}

export default function WithDiscordMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-ot" />;
}
