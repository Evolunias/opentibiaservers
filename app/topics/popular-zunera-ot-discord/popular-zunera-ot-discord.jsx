import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-zunera-ot-discord');
}

export default function PopularZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="popular-zunera-ot-discord" />;
}
