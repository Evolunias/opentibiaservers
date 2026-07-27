import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-midhem-discord');
}

export default function PopularMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-midhem-discord" />;
}
