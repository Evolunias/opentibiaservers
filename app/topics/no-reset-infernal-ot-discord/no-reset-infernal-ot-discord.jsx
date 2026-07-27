import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-infernal-ot-discord');
}

export default function NoResetInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="no-reset-infernal-ot-discord" />;
}
