import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot');
}

export default function HighrateNoxiousotKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot" />;
}
