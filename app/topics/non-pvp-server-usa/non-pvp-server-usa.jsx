import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-server-usa');
}

export default function NonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-server-usa" />;
}
