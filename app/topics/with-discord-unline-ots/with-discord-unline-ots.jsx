import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-unline-ots');
}

export default function WithDiscordUnlineOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-unline-ots" />;
}
