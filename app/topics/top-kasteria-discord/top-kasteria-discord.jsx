import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-kasteria-discord');
}

export default function TopKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-kasteria-discord" />;
}
