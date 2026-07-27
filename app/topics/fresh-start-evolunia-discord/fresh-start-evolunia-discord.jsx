import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolunia-discord');
}

export default function FreshStartEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolunia-discord" />;
}
