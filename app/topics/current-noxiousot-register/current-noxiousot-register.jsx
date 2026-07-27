import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('current-noxiousot-register');
}

export default function CurrentNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="current-noxiousot-register" />;
}
