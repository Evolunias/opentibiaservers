import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-register');
}

export default function LowrateNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-register" />;
}
