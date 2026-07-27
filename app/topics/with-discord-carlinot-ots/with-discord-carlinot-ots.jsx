import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-carlinot-ots');
}

export default function WithDiscordCarlinotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-carlinot-ots" />;
}
