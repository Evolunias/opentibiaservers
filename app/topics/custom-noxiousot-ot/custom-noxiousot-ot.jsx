import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-ot');
}

export default function CustomNoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-ot" />;
}
