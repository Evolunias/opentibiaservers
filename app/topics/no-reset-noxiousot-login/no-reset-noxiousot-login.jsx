import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-noxiousot-login');
}

export default function NoResetNoxiousotLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-noxiousot-login" />;
}
