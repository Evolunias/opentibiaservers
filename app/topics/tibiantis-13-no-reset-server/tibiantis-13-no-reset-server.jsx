import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-13-no-reset-server');
}

export default function Tibiantis13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-13-no-reset-server" />;
}
