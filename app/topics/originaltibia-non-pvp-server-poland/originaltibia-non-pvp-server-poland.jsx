import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('originaltibia-non-pvp-server-poland');
}

export default function OriginaltibiaNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="originaltibia-non-pvp-server-poland" />;
}
