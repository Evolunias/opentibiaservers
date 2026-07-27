import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-11-no-reset-server');
}

export default function Tibiantis11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-11-no-reset-server" />;
}
