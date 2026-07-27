import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-infernal-ot-discord');
}

export default function CurrentInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-infernal-ot-discord" />;
}
