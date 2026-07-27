import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-saintsot-discord');
}

export default function NoResetSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-saintsot-discord" />;
}
