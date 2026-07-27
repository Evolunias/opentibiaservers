import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-server');
}

export default function OfficialHarmoniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-server" />;
}
