import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-zunera-ot-discord');
}

export default function TopZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-zunera-ot-discord" />;
}
