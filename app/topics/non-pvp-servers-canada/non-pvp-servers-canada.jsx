import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-canada');
}

export default function NonPvpServersCanadaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-canada" />;
}
