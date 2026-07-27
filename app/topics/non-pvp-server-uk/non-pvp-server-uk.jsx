import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-uk');
}

export default function NonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-uk" />;
}
