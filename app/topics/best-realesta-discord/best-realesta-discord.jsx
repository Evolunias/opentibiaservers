import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-realesta-discord');
}

export default function BestRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-realesta-discord" />;
}
