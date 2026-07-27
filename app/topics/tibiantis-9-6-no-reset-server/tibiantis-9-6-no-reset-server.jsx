import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-9-6-no-reset-server');
}

export default function Tibiantis96NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-9-6-no-reset-server" />;
}
