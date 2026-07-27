import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-evolera-discord');
}

export default function BestEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-evolera-discord" />;
}
