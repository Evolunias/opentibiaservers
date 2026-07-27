import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-zunera-ot-discord');
}

export default function NoResetZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-zunera-ot-discord" />;
}
