import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-classicus-ots');
}

export default function WithDiscordClassicusOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-classicus-ots" />;
}
