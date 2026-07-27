import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-cyntara-discord');
}

export default function OfficialCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-cyntara-discord" />;
}
