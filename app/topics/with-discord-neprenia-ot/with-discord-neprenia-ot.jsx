import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-neprenia-ot');
}

export default function WithDiscordNepreniaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-neprenia-ot" />;
}
