import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('imperianic-9-6-no-reset-server');
}

export default function Imperianic96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="imperianic-9-6-no-reset-server" />;
}
