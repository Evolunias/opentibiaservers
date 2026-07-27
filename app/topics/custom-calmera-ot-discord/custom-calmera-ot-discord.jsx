import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-calmera-ot-discord');
}

export default function CustomCalmeraOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-calmera-ot-discord" />;
}
