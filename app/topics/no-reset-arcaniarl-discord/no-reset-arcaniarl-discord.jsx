import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-arcaniarl-discord');
}

export default function NoResetArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-arcaniarl-discord" />;
}
