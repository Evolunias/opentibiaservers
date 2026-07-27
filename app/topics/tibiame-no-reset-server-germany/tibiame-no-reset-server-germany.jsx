import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-germany');
}

export default function TibiameNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-germany" />;
}
