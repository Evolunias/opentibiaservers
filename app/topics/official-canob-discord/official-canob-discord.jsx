import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-canob-discord');
}

export default function OfficialCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-canob-discord" />;
}
