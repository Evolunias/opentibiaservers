import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-alastera-ots');
}

export default function WithDiscordAlasteraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-alastera-ots" />;
}
