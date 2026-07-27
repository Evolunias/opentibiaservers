import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('alastera-no-reset-server-europe');
}

export default function AlasteraNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="alastera-no-reset-server-europe" />;
}
