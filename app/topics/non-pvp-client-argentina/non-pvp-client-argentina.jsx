import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-client-argentina');
}

export default function NonPvpClientArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-client-argentina" />;
}
