import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-unline-discord');
}

export default function TopUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-unline-discord" />;
}
