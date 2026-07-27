import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-eldera-ot-server');
}

export default function NoResetElderaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-eldera-ot-server" />;
}
