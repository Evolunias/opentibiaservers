import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('tibianus-non-pvp-server-uk');
}

export default function TibianusNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="tibianus-non-pvp-server-uk" />;
}
