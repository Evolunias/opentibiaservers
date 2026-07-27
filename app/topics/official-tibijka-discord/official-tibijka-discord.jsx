import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-tibijka-discord');
}

export default function OfficialTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-tibijka-discord" />;
}
