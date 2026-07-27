import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-12-no-reset-server');
}

export default function Imperianic12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-12-no-reset-server" />;
}
