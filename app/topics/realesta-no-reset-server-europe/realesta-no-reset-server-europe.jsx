import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('realesta-no-reset-server-europe');
}

export default function RealestaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="realesta-no-reset-server-europe" />;
}
