import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-15-no-reset-server');
}

export default function Saintsot15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-15-no-reset-server" />;
}
