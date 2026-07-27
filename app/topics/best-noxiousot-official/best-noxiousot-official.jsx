import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('best-noxiousot-official');
}

export default function BestNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="best-noxiousot-official" />;
}
