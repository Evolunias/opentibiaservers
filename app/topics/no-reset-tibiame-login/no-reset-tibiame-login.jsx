import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-login');
}

export default function NoResetTibiameLoginKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-login" />;
}
