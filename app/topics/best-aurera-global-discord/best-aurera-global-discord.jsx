import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-aurera-global-discord');
}

export default function BestAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-aurera-global-discord" />;
}
