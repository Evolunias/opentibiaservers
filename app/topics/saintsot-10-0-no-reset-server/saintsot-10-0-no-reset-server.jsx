import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-10-0-no-reset-server');
}

export default function Saintsot100NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-10-0-no-reset-server" />;
}
