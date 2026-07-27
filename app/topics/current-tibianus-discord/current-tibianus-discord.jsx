import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-tibianus-discord');
}

export default function CurrentTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-tibianus-discord" />;
}
