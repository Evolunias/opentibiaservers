import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-germany');
}

export default function AlasteraNoResetServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-germany" />;
}
