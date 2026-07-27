import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-poland');
}

export default function KasteriaNoResetServerPolandKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-poland" />;
}
