import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolunia-discord');
}

export default function BestEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-evolunia-discord" />;
}
