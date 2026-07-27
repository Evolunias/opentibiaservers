import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-aurera-global-discord');
}

export default function OfficialAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-aurera-global-discord" />;
}
