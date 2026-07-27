import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-oldera-discord');
}

export default function BestOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-oldera-discord" />;
}
