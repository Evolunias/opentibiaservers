import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-ots');
}

export default function BestNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-ots" />;
}
