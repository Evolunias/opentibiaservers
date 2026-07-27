import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-harmonia-ot-discord');
}

export default function NoResetHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-harmonia-ot-discord" />;
}
