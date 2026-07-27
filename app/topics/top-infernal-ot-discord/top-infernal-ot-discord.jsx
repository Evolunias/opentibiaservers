import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-infernal-ot-discord');
}

export default function TopInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-infernal-ot-discord" />;
}
