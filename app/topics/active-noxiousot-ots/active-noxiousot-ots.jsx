import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-ots');
}

export default function ActiveNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-ots" />;
}
