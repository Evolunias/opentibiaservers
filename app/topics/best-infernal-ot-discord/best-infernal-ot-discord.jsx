import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-infernal-ot-discord');
}

export default function BestInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-infernal-ot-discord" />;
}
