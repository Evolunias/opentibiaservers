import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-zunera-ot-discord');
}

export default function BestZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="best-zunera-ot-discord" />;
}
