import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-realera-ot-server');
}

export default function NoResetRealeraOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-realera-ot-server" />;
}
