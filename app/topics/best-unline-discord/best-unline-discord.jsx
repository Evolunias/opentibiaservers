import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-unline-discord');
}

export default function BestUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-unline-discord" />;
}
