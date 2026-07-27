import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-12-no-reset-server');
}

export default function Tibiantis12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-12-no-reset-server" />;
}
