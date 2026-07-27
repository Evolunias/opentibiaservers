import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-ots');
}

export default function WithDiscordMiracleOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-ots" />;
}
