import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-official');
}

export default function CustomNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-official" />;
}
