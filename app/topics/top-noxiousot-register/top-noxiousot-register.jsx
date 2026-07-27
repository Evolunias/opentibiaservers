import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('top-noxiousot-register');
}

export default function TopNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="top-noxiousot-register" />;
}
