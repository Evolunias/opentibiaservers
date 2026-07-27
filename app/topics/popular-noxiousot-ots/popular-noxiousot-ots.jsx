import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-ots');
}

export default function PopularNoxiousotOtsKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-ots" />;
}
