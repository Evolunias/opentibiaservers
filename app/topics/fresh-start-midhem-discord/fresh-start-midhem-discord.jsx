import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-midhem-discord');
}

export default function FreshStartMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-midhem-discord" />;
}
