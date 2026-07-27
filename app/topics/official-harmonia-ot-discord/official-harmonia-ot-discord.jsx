import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-discord');
}

export default function OfficialHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-discord" />;
}
