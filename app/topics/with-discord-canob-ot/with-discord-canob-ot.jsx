import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-canob-ot');
}

export default function WithDiscordCanobOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-canob-ot" />;
}
