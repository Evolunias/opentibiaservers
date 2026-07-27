import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-calmera-ot-discord');
}

export default function NewCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="new-calmera-ot-discord" />;
}
