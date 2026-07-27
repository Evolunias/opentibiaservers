import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-11-no-reset-server');
}

export default function Kasteria11NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-11-no-reset-server" />;
}
