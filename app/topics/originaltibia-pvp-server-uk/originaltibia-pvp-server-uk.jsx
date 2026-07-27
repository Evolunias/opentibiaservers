import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-uk');
}

export default function OriginaltibiaPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-uk" />;
}
