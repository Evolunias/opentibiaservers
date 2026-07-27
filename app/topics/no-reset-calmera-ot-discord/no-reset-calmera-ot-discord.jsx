import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-calmera-ot-discord');
}

export default function NoResetCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-calmera-ot-discord" />;
}
