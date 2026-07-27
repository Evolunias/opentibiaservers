import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-10-0-no-reset-server');
}

export default function Imperianic100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-10-0-no-reset-server" />;
}
