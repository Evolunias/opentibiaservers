import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-evolunia-discord');
}

export default function ActiveEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-evolunia-discord" />;
}
