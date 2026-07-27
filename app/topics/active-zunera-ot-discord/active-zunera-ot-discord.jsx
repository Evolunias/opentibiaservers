import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-zunera-ot-discord');
}

export default function ActiveZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="active-zunera-ot-discord" />;
}
