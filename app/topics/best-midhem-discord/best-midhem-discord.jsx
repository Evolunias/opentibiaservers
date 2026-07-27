import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-midhem-discord');
}

export default function BestMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-midhem-discord" />;
}
