import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('kasteria-no-reset-server-europe');
}

export default function KasteriaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="kasteria-no-reset-server-europe" />;
}
