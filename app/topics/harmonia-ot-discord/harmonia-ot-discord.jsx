import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('harmonia-ot-discord');
}

export default function HarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="harmonia-ot-discord" />;
}
