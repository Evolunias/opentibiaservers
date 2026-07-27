import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-thornia-ot-server');
}

export default function NoResetThorniaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-thornia-ot-server" />;
}
