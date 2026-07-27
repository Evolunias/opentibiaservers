import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-discord');
}

export default function PopularHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-discord" />;
}
