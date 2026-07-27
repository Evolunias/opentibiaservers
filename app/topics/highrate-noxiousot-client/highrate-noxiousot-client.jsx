import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-client');
}

export default function HighrateNoxiousotClientKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-client" />;
}
