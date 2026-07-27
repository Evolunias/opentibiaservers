import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-tibiame-ot-server');
}

export default function NoResetTibiameOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-tibiame-ot-server" />;
}
