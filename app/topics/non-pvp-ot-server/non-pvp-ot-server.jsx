import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('non-pvp-ot-server');
}

export default function NonPvpOtServerKeywordPage() {
  return <StaticKeywordPage slug="non-pvp-ot-server" />;
}
