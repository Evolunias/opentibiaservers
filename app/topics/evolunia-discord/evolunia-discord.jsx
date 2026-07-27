import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolunia-discord');
}

export default function EvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="evolunia-discord" />;
}
