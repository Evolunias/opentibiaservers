import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-ranger-s-arcani-discord');
}

export default function NoResetRangerSArcaniDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-ranger-s-arcani-discord" />;
}
