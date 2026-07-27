import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ameria-discord');
}

export default function NoResetAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ameria-discord" />;
}
