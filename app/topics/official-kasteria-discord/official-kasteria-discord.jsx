import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-kasteria-discord');
}

export default function OfficialKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-kasteria-discord" />;
}
