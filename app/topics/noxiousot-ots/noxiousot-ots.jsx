import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-ots');
}

export default function NoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-ots" />;
}
