import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-register');
}

export default function NoResetTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-register" />;
}
