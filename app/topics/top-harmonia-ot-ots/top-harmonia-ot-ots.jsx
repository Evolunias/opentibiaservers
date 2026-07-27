import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-harmonia-ot-ots');
}

export default function TopHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="top-harmonia-ot-ots" />;
}
