import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-no-reset-server-europe');
}

export default function OriginaltibiaNoResetServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-no-reset-server-europe" />;
}
