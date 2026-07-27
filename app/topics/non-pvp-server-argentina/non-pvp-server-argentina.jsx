import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-argentina');
}

export default function NonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-argentina" />;
}
