import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('official-harmonia-ot');
}

export default function OfficialHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="official-harmonia-ot" />;
}
