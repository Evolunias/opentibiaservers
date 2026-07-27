import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-pvp-server-poland');
}

export default function OriginaltibiaPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-pvp-server-poland" />;
}
