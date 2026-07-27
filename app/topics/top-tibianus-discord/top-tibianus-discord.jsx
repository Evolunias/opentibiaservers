import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-tibianus-discord');
}

export default function TopTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-tibianus-discord" />;
}
