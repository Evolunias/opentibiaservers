import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-ameria-discord');
}

export default function OfficialAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-ameria-discord" />;
}
