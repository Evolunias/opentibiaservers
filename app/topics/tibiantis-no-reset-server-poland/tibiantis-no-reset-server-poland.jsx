import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiantis-no-reset-server-poland');
}

export default function TibiantisNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiantis-no-reset-server-poland" />;
}
