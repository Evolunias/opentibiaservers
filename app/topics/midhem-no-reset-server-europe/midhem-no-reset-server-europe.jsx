import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('midhem-no-reset-server-europe');
}

export default function MidhemNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="midhem-no-reset-server-europe" />;
}
