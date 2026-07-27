import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-official');
}

export default function HighrateNoxiousotOfficialKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-official" />;
}
