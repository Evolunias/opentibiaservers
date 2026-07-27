import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-kasteria-discord');
}

export default function BestKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-kasteria-discord" />;
}
