import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-12-no-reset-server');
}

export default function Saintsot12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-12-no-reset-server" />;
}
