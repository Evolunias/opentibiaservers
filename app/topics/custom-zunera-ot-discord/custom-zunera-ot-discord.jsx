import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-zunera-ot-discord');
}

export default function CustomZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-zunera-ot-discord" />;
}
