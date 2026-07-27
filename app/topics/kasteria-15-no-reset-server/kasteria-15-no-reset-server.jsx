import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-15-no-reset-server');
}

export default function Kasteria15NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-15-no-reset-server" />;
}
