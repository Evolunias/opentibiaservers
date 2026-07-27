import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-neprenia-discord');
}

export default function BestNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-neprenia-discord" />;
}
