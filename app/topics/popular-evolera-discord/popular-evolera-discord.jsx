import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-evolera-discord');
}

export default function PopularEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-evolera-discord" />;
}
