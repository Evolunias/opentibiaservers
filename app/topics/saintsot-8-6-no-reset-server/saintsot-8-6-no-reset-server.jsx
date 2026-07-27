import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-6-no-reset-server');
}

export default function Saintsot86NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-6-no-reset-server" />;
}
