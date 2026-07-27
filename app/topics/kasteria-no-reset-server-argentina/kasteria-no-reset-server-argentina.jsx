import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-argentina');
}

export default function KasteriaNoResetServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-argentina" />;
}
