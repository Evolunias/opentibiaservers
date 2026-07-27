import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('new-noxiousot-ot');
}

export default function NewNoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="new-noxiousot-ot" />;
}
