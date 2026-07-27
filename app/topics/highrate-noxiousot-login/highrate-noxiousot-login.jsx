import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-login');
}

export default function HighrateNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-login" />;
}
