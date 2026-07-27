import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia-ots');
}

export default function WithDiscordMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia-ots" />;
}
