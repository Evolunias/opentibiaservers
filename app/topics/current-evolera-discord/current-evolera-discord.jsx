import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-evolera-discord');
}

export default function CurrentEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-evolera-discord" />;
}
