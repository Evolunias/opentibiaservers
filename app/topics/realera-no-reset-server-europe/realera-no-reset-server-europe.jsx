import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realera-no-reset-server-europe');
}

export default function RealeraNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realera-no-reset-server-europe" />;
}
