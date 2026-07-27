import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-zunera-ot-discord');
}

export default function CurrentZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-zunera-ot-discord" />;
}
