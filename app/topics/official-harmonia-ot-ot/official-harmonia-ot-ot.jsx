import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot-ot');
}

export default function OfficialHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot-ot" />;
}
