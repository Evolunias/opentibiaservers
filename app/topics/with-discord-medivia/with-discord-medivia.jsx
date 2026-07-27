import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-medivia');
}

export default function WithDiscordMediviaKeywordPage() {
  return <StaticKeywordPage slug="with-discord-medivia" />;
}
