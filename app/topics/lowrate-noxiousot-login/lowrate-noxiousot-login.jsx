import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('lowrate-noxiousot-login');
}

export default function LowrateNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="lowrate-noxiousot-login" />;
}
