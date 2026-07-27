import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolunia-discord');
}

export default function LowrateEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolunia-discord" />;
}
