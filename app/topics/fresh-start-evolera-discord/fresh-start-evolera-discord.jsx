import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-evolera-discord');
}

export default function FreshStartEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-evolera-discord" />;
}
