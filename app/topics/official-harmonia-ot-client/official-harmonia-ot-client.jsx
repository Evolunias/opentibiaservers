import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-client');
}

export default function OfficialHarmoniaOtClientKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-client" />;
}
