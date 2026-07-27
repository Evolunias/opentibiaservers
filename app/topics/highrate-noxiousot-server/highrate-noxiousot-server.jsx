import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-server');
}

export default function HighrateNoxiousotServerKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-server" />;
}
