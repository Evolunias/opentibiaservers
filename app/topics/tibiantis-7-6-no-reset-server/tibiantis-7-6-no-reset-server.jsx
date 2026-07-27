import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-7-6-no-reset-server');
}

export default function Tibiantis76NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-7-6-no-reset-server" />;
}
