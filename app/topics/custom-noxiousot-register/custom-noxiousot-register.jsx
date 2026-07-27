import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('custom-noxiousot-register');
}

export default function CustomNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="custom-noxiousot-register" />;
}
