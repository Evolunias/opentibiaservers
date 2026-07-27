import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-13-no-reset-server');
}

export default function Kasteria13NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-13-no-reset-server" />;
}
