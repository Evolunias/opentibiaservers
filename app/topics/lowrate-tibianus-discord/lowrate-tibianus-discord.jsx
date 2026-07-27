import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-tibianus-discord');
}

export default function LowrateTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="lowrate-tibianus-discord" />;
}
