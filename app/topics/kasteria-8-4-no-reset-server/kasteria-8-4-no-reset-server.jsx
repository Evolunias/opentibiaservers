import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-8-4-no-reset-server');
}

export default function Kasteria84NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-8-4-no-reset-server" />;
}
