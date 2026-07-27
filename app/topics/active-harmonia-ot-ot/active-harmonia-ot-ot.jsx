import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-ot');
}

export default function ActiveHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-ot" />;
}
