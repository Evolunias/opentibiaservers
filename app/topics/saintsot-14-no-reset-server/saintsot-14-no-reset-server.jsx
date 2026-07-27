import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-14-no-reset-server');
}

export default function Saintsot14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-14-no-reset-server" />;
}
