import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-eldera-discord');
}

export default function FreshStartElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-eldera-discord" />;
}
