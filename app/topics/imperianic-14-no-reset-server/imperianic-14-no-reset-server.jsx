import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-14-no-reset-server');
}

export default function Imperianic14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-14-no-reset-server" />;
}
