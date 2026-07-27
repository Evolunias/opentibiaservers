import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-calmera-ot-discord');
}

export default function PopularCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-calmera-ot-discord" />;
}
