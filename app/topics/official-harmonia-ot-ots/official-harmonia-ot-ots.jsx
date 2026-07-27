import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-ots');
}

export default function OfficialHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-ots" />;
}
