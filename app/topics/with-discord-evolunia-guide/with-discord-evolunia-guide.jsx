import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-discord-evolunia-guide');
}

export default function WithDiscordEvoluniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-discord-evolunia-guide" />;
}
