import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-ots');
}

export default function CustomNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-ots" />;
}
