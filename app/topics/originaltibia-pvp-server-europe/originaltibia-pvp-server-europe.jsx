import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-europe');
}

export default function OriginaltibiaPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-europe" />;
}
