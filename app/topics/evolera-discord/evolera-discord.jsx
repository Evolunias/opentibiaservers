import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('evolera-discord');
}

export default function EvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="evolera-discord" />;
}
