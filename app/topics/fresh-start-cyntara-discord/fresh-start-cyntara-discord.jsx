import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-cyntara-discord');
}

export default function FreshStartCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-cyntara-discord" />;
}
