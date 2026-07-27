import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-ot');
}

export default function CurrentNoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-ot" />;
}
