import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibiame-no-reset-server-poland');
}

export default function TibiameNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="tibiame-no-reset-server-poland" />;
}
