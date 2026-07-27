import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-eldera-discord');
}

export default function TopElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-eldera-discord" />;
}
