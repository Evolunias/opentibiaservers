import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-eldera-discord');
}

export default function PopularElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-eldera-discord" />;
}
