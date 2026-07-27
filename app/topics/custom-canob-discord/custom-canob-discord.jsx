import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-canob-discord');
}

export default function CustomCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-canob-discord" />;
}
