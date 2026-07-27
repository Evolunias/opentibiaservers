import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-tibianus-discord');
}

export default function BestTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-tibianus-discord" />;
}
