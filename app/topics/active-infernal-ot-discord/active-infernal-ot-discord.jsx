import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-infernal-ot-discord');
}

export default function ActiveInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-infernal-ot-discord" />;
}
