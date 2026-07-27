import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-ot');
}

export default function CustomHarmoniaOtOtKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-ot" />;
}
