import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('active-noxiousot-register');
}

export default function ActiveNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="active-noxiousot-register" />;
}
