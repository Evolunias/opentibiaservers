import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-4-no-reset-server');
}

export default function Imperianic74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-4-no-reset-server" />;
}
