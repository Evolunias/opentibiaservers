import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-aurera-global-discord');
}

export default function ActiveAureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-aurera-global-discord" />;
}
