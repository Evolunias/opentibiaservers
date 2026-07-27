import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-oldera-discord');
}

export default function FreshStartOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-oldera-discord" />;
}
