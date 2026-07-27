import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('popular-noxiousot-official');
}

export default function PopularNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="popular-noxiousot-official" />;
}
