import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-arcaniarl-ot');
}

export default function WithDiscordArcaniarlOtKeywordPage() {
  return <StaticKeywordPage slug="with-discord-arcaniarl-ot" />;
}
