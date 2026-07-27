import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('noxiousot-ot');
}

export default function NoxiousotOtKeywordPage() {
  return <StaticKeywordPage slug="noxiousot-ot" />;
}
