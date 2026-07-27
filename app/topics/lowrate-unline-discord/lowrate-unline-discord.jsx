import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-unline-discord');
}

export default function LowrateUnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-unline-discord" />;
}
