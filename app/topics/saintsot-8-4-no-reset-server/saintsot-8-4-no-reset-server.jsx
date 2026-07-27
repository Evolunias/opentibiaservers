import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-4-no-reset-server');
}

export default function Saintsot84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-4-no-reset-server" />;
}
