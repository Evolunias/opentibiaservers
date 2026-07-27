import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibianus-ots');
}

export default function WithDiscordTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibianus-ots" />;
}
