import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-zunera-ot-discord');
}

export default function NewZuneraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-zunera-ot-discord" />;
}
