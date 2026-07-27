import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-evolera-discord');
}

export default function LowrateEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-evolera-discord" />;
}
