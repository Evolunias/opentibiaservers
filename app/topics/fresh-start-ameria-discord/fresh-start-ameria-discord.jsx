import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-ameria-discord');
}

export default function FreshStartAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-ameria-discord" />;
}
