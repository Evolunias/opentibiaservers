import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-14-no-reset-server');
}

export default function Kasteria14NoResetServerKeywordPage() {
  return <StaticKeywordPage slug="kasteria-14-no-reset-server" />;
}
