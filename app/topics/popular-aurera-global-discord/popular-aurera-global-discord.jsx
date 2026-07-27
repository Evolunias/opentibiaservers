import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-aurera-global-discord');
}

export default function PopularAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-aurera-global-discord" />;
}
