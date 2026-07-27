import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolunia-discord');
}

export default function CurrentEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-evolunia-discord" />;
}
