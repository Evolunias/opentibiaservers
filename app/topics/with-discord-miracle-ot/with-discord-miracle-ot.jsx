import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-miracle-ot');
}

export default function WithDiscordMiracleOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-miracle-ot" />;
}
