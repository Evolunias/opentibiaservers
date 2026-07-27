import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-canob-discord');
}

export default function ActiveCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-canob-discord" />;
}
