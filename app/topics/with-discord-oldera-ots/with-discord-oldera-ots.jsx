import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-oldera-ots');
}

export default function WithDiscordOlderaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-oldera-ots" />;
}
