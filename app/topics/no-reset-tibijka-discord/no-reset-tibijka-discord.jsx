import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibijka-discord');
}

export default function NoResetTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibijka-discord" />;
}
