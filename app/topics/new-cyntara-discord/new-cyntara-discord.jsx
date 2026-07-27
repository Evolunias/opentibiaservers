import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-cyntara-discord');
}

export default function NewCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-cyntara-discord" />;
}
