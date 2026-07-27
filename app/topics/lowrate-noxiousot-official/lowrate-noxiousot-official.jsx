import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-official');
}

export default function LowrateNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-official" />;
}
