import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('unline-non-pvp-server-uk');
}

export default function UnlineNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="unline-non-pvp-server-uk" />;
}
