import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-cyntara-discord');
}

export default function BestCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-cyntara-discord" />;
}
