import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-canob-discord');
}

export default function TopCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-canob-discord" />;
}
