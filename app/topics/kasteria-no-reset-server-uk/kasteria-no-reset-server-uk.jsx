import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-uk');
}

export default function KasteriaNoResetServerUkKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-uk" />;
}
