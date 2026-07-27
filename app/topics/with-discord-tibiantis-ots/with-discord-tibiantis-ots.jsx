import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibiantis-ots');
}

export default function WithDiscordTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibiantis-ots" />;
}
