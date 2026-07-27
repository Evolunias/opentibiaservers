import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-ots');
}

export default function CurrentNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-ots" />;
}
