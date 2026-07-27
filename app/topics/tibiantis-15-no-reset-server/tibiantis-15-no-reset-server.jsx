import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-15-no-reset-server');
}

export default function Tibiantis15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-15-no-reset-server" />;
}
