import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-register');
}

export default function NoResetNoxiousotRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-register" />;
}
