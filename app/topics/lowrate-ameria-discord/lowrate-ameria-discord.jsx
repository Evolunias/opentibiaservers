import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-ameria-discord');
}

export default function LowrateAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-ameria-discord" />;
}
