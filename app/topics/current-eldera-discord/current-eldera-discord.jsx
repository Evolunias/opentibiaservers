import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-eldera-discord');
}

export default function CurrentElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-eldera-discord" />;
}
