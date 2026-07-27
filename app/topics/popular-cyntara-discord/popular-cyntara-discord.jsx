import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-cyntara-discord');
}

export default function PopularCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-cyntara-discord" />;
}
