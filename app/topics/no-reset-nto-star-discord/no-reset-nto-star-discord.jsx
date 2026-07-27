import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-nto-star-discord');
}

export default function NoResetNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-nto-star-discord" />;
}
