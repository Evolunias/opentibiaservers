import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-harmonia-ot-ots');
}

export default function CustomHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-harmonia-ot-ots" />;
}
