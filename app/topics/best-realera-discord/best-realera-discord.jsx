import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realera-discord');
}

export default function BestRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-realera-discord" />;
}
