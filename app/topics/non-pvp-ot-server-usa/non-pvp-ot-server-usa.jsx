import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server-usa');
}

export default function NonPvpOtServerUsaKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server-usa" />;
}
