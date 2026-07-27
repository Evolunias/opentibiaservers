import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-discord');
}

export default function TopHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-discord" />;
}
