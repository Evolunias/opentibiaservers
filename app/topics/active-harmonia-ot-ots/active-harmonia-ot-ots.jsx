import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-harmonia-ot-ots');
}

export default function ActiveHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="active-harmonia-ot-ots" />;
}
