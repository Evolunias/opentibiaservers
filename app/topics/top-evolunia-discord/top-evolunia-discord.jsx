import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolunia-discord');
}

export default function TopEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-evolunia-discord" />;
}
