import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-germany');
}

export default function TibiantisNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-germany" />;
}
