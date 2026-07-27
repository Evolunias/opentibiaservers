import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-12-no-reset-server');
}

export default function Kasteria12NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-12-no-reset-server" />;
}
