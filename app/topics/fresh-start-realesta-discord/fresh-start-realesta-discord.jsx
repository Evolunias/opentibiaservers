import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-realesta-discord');
}

export default function FreshStartRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-realesta-discord" />;
}
