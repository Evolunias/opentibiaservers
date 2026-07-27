import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-uk');
}

export default function NonPvpOtServerUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-uk" />;
}
