import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot');
}

export default function CustomHarmoniaOtKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot" />;
}
