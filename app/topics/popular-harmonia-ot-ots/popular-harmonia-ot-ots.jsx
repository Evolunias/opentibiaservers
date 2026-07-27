import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-harmonia-ot-ots');
}

export default function PopularHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-harmonia-ot-ots" />;
}
