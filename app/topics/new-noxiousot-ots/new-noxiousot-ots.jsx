import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-ots');
}

export default function NewNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-ots" />;
}
