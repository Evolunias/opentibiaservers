import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-aurera-global-discord');
}

export default function CurrentAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-aurera-global-discord" />;
}
