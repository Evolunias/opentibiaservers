import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-harmonia-ot-discord');
}

export default function CurrentHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="current-harmonia-ot-discord" />;
}
