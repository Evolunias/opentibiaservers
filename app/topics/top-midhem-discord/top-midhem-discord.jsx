import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-midhem-discord');
}

export default function TopMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-midhem-discord" />;
}
