import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-unline-discord');
}

export default function PopularUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-unline-discord" />;
}
