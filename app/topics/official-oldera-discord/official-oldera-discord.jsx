import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-oldera-discord');
}

export default function OfficialOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-oldera-discord" />;
}
