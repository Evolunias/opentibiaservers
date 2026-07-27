import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-evolera-discord');
}

export default function TopEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-evolera-discord" />;
}
