import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-ots');
}

export default function WithDiscordNepreniaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-ots" />;
}
