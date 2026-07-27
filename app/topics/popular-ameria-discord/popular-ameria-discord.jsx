import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-ameria-discord');
}

export default function PopularAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-ameria-discord" />;
}
