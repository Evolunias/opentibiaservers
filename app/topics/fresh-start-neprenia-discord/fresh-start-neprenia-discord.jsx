import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-neprenia-discord');
}

export default function FreshStartNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-neprenia-discord" />;
}
