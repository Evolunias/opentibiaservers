import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-infernal-ot-discord');
}

export default function FreshStartInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-infernal-ot-discord" />;
}
