import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-uk');
}

export default function NonPvpServersUkKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-uk" />;
}
