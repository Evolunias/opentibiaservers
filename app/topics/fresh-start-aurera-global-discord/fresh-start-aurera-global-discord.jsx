import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-aurera-global-discord');
}

export default function FreshStartAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-aurera-global-discord" />;
}
