import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-oldera-discord');
}

export default function TopOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-oldera-discord" />;
}
