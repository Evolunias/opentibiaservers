import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-1-no-reset-server');
}

export default function Imperianic71NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-1-no-reset-server" />;
}
