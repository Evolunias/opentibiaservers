import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot');
}

export default function ActiveHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot" />;
}
