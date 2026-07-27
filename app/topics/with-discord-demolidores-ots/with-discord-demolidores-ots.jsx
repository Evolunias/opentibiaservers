import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-demolidores-ots');
}

export default function WithDiscordDemolidoresOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-demolidores-ots" />;
}
