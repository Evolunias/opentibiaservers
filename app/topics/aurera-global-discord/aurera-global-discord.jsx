import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('aurera-global-discord');
}

export default function AureraGlobalDiscordKeywordPage() {
  return <StaticKeywordPage slug="aurera-global-discord" />;
}
