import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-tibijka-ot');
}

export default function WithDiscordTibijkaOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-tibijka-ot" />;
}
