import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolunia-discord');
}

export default function PopularEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-evolunia-discord" />;
}
