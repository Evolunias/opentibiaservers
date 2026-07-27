import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-neprenia-discord');
}

export default function TopNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-neprenia-discord" />;
}
