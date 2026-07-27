import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('highrate-noxiousot-register');
}

export default function HighrateNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="highrate-noxiousot-register" />;
}
