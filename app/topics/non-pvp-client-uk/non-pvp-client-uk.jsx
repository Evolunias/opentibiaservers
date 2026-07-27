import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-uk');
}

export default function NonPvpClientUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-uk" />;
}
