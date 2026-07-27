import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-poland');
}

export default function AlasteraNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-poland" />;
}
