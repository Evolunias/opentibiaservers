import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-official');
}

export default function ActiveNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-official" />;
}
