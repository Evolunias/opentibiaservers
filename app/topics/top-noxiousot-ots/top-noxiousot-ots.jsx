import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-ots');
}

export default function TopNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-ots" />;
}
