import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-8-4-no-reset-server');
}

export default function Imperianic84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-8-4-no-reset-server" />;
}
