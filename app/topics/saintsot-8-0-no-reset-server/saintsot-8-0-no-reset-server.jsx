import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('saintsot-8-0-no-reset-server');
}

export default function Saintsot80NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="saintsot-8-0-no-reset-server" />;
}
