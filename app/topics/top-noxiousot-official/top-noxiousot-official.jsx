import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-official');
}

export default function TopNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-official" />;
}
