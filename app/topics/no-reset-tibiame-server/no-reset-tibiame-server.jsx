import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-server');
}

export default function NoResetTibiameServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-server" />;
}
