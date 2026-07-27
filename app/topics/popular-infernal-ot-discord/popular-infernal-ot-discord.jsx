import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-infernal-ot-discord');
}

export default function PopularInfernalOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-infernal-ot-discord" />;
}
