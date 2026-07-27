import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-oldera-discord');
}

export default function LowrateOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-oldera-discord" />;
}
