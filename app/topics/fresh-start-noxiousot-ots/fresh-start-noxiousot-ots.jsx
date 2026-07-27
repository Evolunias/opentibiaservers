import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('fresh-start-noxiousot-ots');
}

export default function FreshStartNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="fresh-start-noxiousot-ots" />;
}
