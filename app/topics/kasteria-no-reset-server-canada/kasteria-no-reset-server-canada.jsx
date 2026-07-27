import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-canada');
}

export default function KasteriaNoResetServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-canada" />;
}
