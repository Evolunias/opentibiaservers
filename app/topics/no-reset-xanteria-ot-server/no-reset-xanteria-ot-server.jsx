import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('no-reset-xanteria-ot-server');
}

export default function NoResetXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="no-reset-xanteria-ot-server" />;
}
