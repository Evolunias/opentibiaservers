import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-saintsot-ots');
}

export default function WithDiscordSaintsotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-saintsot-ots" />;
}
