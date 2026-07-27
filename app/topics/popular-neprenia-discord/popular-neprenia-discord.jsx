import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-neprenia-discord');
}

export default function PopularNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-neprenia-discord" />;
}
