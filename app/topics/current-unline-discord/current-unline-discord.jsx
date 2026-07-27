import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-unline-discord');
}

export default function CurrentUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-unline-discord" />;
}
