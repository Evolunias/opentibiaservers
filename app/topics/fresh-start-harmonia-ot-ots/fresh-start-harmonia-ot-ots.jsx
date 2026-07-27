import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-harmonia-ot-ots');
}

export default function FreshStartHarmoniaOtOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-harmonia-ot-ots" />;
}
