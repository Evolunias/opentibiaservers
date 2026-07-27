import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-15-no-reset-server');
}

export default function Imperianic15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-15-no-reset-server" />;
}
