import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-kasteria-ot');
}

export default function WithDiscordKasteriaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-kasteria-ot" />;
}
