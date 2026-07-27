import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-servers-argentina');
}

export default function NonPvpServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-servers-argentina" />;
}
