import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-evolunia-discord');
}

export default function NoResetEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-evolunia-discord" />;
}
