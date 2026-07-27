import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-14-no-reset-server');
}

export default function Tibiantis14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-14-no-reset-server" />;
}
