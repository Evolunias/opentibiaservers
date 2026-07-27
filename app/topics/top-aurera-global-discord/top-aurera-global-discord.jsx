import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-aurera-global-discord');
}

export default function TopAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-aurera-global-discord" />;
}
