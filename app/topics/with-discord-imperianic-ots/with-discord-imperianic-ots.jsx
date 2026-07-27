import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-imperianic-ots');
}

export default function WithDiscordImperianicOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-imperianic-ots" />;
}
