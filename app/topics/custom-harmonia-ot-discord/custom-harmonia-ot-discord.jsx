import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-discord');
}

export default function CustomHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-discord" />;
}
