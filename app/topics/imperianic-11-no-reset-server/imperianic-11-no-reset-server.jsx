import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-11-no-reset-server');
}

export default function Imperianic11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-11-no-reset-server" />;
}
