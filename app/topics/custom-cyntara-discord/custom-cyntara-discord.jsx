import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-cyntara-discord');
}

export default function CustomCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-cyntara-discord" />;
}
