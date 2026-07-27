import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-4-no-reset-server');
}

export default function Tibiantis74NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-4-no-reset-server" />;
}
