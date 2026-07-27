import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-13-no-reset-server');
}

export default function Imperianic13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-13-no-reset-server" />;
}
