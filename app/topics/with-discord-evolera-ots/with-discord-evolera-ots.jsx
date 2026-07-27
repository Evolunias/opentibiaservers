import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolera-ots');
}

export default function WithDiscordEvoleraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolera-ots" />;
}
