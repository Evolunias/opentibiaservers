import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-blazera-ots');
}

export default function WithDiscordBlazeraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-blazera-ots" />;
}
