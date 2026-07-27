import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-germany');
}

export default function KasteriaNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-germany" />;
}
