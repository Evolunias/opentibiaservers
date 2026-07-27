import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-imperianic-ot-server');
}

export default function NoResetImperianicOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-imperianic-ot-server" />;
}
