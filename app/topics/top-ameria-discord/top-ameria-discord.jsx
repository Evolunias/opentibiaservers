import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-ameria-discord');
}

export default function TopAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-ameria-discord" />;
}
