import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-ot');
}

export default function PopularNoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-ot" />;
}
