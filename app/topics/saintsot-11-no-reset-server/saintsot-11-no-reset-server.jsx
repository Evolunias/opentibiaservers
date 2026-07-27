import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-11-no-reset-server');
}

export default function Saintsot11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-11-no-reset-server" />;
}
