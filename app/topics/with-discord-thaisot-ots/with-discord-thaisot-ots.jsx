import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-thaisot-ots');
}

export default function WithDiscordThaisotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-thaisot-ots" />;
}
