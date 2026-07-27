import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-ot');
}

export default function ActiveNoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-ot" />;
}
