import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-7-6-no-reset-server');
}

export default function Imperianic76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-7-6-no-reset-server" />;
}
