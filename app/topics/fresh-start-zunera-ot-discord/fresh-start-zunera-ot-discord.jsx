import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-zunera-ot-discord');
}

export default function FreshStartZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-zunera-ot-discord" />;
}
