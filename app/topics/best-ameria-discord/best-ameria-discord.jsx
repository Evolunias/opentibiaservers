import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-ameria-discord');
}

export default function BestAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-ameria-discord" />;
}
