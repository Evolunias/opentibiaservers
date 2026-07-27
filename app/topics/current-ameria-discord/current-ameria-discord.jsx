import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-ameria-discord');
}

export default function CurrentAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-ameria-discord" />;
}
