import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-evolunia-discord');
}

export default function OfficialEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-evolunia-discord" />;
}
