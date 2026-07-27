import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-eldera-discord');
}

export default function BestElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-eldera-discord" />;
}
